using AutoMapper;
using EmployeeManagement.API.DTOs.Department;
using EmployeeManagement.API.Models;
using EmployeeManagement.API.Repositories.Interfaces;
using EmployeeManagement.API.Services.Interfaces;

namespace EmployeeManagement.API.Services.Implementations
{
    public class DepartmentService : IDepartmentService
    {

        private readonly IMapper _mapper;
        private readonly IDepartmentRepository _departmentRepository;

        public DepartmentService(IDepartmentRepository departmentRepository , IMapper mapper)
        {
            _departmentRepository = departmentRepository;
            _mapper = mapper;
        }

        public async Task AddAsync(DepartmentCreateDTO dto)
        {
            var department = _mapper.Map<Department>(dto);

            await _departmentRepository.AddAsync(department);
            await _departmentRepository.SaveAsync();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var department = await _departmentRepository.GetByIdAsync(id);

            if(department == null)
            {
                return false; 
            }

            _departmentRepository.Delete(department);

            await _departmentRepository.SaveAsync();

            return true;
        }

        public async Task<IEnumerable<DepartmentResponseDTO>> GetallAsync()
        {
            var departments = await _departmentRepository.GetAllAsync();

            var result = _mapper.Map<IEnumerable<DepartmentResponseDTO>>(departments);

            return result;
        }
    }
}
