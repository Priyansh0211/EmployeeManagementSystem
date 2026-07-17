
using EmployeeManagement.API.DTOs.Department;

namespace EmployeeManagement.API.Services.Interfaces
{
    public interface IDepartmentService
    {
        Task<IEnumerable<DepartmentResponseDTO>> GetallAsync();

        Task AddAsync(DepartmentCreateDTO dto);

        Task<bool> DeleteAsync(int id);
    }
}
