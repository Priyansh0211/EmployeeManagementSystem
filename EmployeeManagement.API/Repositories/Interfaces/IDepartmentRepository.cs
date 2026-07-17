using EmployeeManagement.API.Models;

namespace EmployeeManagement.API.Repositories.Interfaces
{
    public interface IDepartmentRepository
    {
        Task<Department?> GetByIdAsync(int id);

        Task<Department?> GetByNameAsync(string name);

        Task<IEnumerable<Department>> GetAllAsync();

        Task AddAsync(Department department);

        void Delete(Department department);

        Task SaveAsync();

    }
}
