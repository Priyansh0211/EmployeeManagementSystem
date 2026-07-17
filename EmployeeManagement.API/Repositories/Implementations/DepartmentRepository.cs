using EmployeeManagement.API.Data;
using EmployeeManagement.API.Models;
using EmployeeManagement.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.API.Repositories.Implementations
{
    public class DepartmentRepository : IDepartmentRepository
    {

        private readonly AppDbContext _context;

        public DepartmentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task AddAsync(Department department)
        {

            await _context.Departments.AddAsync(department);
            
        }

        public async Task<IEnumerable<Department>> GetAllAsync()
        {
            return await _context.Departments.OrderBy(d => d.Name).ToListAsync();
        }

        public async Task<Department?> GetByIdAsync(int id)
        {
            return await _context.Departments.FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task<Department?> GetByNameAsync(string name)
        {
            return await _context.Departments.FirstOrDefaultAsync(d => d.Name == name);
        }

        public void Delete(Department department)
        {
            _context.Departments.Remove(department);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
