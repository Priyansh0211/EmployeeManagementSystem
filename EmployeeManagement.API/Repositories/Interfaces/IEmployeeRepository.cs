using EmployeeManagement.API.Models;

namespace EmployeeManagement.API.Repositories.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetAllAsync();

        Task<Employee?> GetByIdAsync(int id);

        Task AddAsync (Employee employee);

        void Update (Employee employee);

        void Delete (Employee employee);

        Task<IEnumerable<Employee>> GetByDepartmentAsync(int departmentId);

        Task SaveAsync();

        Task<IEnumerable<Employee>> SearchAsync(string keyword);
    }
}
