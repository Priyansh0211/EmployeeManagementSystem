using EmployeeManagement.API.Data;
using EmployeeManagement.API.Models;
using EmployeeManagement.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.API.Repositories.Implementations
{
    public class EmployeeRepository : IEmployeeRepository
    {

        private readonly AppDbContext _context;

        public EmployeeRepository(AppDbContext context) 
        {
            _context = context;
        }


        public async Task AddAsync(Employee employee)
        {
            await _context.Employees.AddAsync(employee);
        }

        public void Delete(Employee employee)
        {
            _context.Employees.Remove(employee);
        }

        public async Task<IEnumerable<Employee>> GetAllAsync()
        {
            return await _context.Employees.Include(e => e.Department).ToListAsync();
        }
        
        public async Task<Employee?> GetByIdAsync(int id)
        {
            return await _context.Employees.Include(e=>e.Department).FirstOrDefaultAsync(e=>e.Id==id);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Update(Employee employee)
        {
            _context.Employees.Update(employee);
        }

        public async Task<IEnumerable<Employee>> GetByDepartmentAsync(int departmentId)
        {
            return await _context.Employees.Include(e=>e.Department).Where(e => e.DepartmentId == departmentId).ToListAsync();
        }

        public async Task<IEnumerable<Employee>> SearchAsync(string keyword)
        {

            if (string.IsNullOrWhiteSpace(keyword))
            {
                return await _context.Employees.Include(e => e.Department).ToListAsync();
            }

            keyword = keyword.Trim().ToLower();
            return await _context.Employees.Include(e=>e.Department).Where(e=>e.Name.ToLower().Contains(keyword) || e.Email.ToLower().Contains(keyword)).ToListAsync();
        }
    }
}
