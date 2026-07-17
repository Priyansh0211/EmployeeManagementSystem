using EmployeeManagement.API.DTOs.Employee;

namespace EmployeeManagement.API.Services.Interfaces
{
    public interface IEmployeeService
    {

        Task<IEnumerable<EmployeeResponseDTO>> GetAllAsync();

        Task<EmployeeResponseDTO?> GetByIdAsync(int id);

        Task AddAsync(EmployeeCreateDTO dto);

        Task<bool> UpdateAsync(int id, EmployeeUpdateDTO dto);

        Task<bool> DeleteAsync(int id);

        Task<IEnumerable<EmployeeResponseDTO>> SearchAsync(string search);

        Task<IEnumerable<EmployeeResponseDTO>> GetByDepartmentAsync(int departmentId);



    }
}
