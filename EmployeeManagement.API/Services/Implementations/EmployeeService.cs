using AutoMapper;
using EmployeeManagement.API.DTOs.Employee;
using EmployeeManagement.API.Models;
using EmployeeManagement.API.Repositories.Interfaces;
using EmployeeManagement.API.Services.Interfaces;
using System.ComponentModel;

namespace EmployeeManagement.API.Services.Implementations
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;   
        private readonly IDepartmentRepository _DepartmentRepository;
        private readonly IMapper _mapper;

        public EmployeeService(IEmployeeRepository employeeRepository, IDepartmentRepository departmentRepository,
            IMapper mapper) 
        {
            _employeeRepository = employeeRepository;
            _DepartmentRepository = departmentRepository;
            _mapper = mapper;
        }



        public async Task<bool> DeleteAsync(int id)
        {
            var employee = await _employeeRepository.GetByIdAsync(id);
            if (employee == null)
            {
                return false;
            }
            _employeeRepository.Delete(employee);
            await _employeeRepository.SaveAsync();
            return true;

        }

        public async Task<IEnumerable<EmployeeResponseDTO>> GetAllAsync()
        {
            var employees = await _employeeRepository.GetAllAsync();

            var result = _mapper.Map<IEnumerable<EmployeeResponseDTO>>(employees);

            return result;
        }

        public async Task<IEnumerable<EmployeeResponseDTO>> GetByDepartmentAsync(int departmentId)
        {

            var employees = await _employeeRepository.GetByDepartmentAsync(departmentId);

            return _mapper.Map<IEnumerable<EmployeeResponseDTO>>(employees);
        }

        public async Task<EmployeeResponseDTO?> GetByIdAsync(int id)
        {
            var employee = await _employeeRepository.GetByIdAsync(id);
            if(employee == null)
            {
                return null;
            }
            return _mapper.Map<EmployeeResponseDTO>(employee);
        }

        public async Task<IEnumerable<EmployeeResponseDTO>> SearchAsync(string search)
        {
            var employees = await _employeeRepository.SearchAsync(search);

            return _mapper.Map<IEnumerable<EmployeeResponseDTO>>(employees);
        }

        public async Task AddAsync(EmployeeCreateDTO dto)
        {
            var department = await _DepartmentRepository.GetByIdAsync(dto.DepartmentId);
            if (department == null)
            {
                throw new Exception("Department not found");
            }
            var employee = _mapper.Map<Employee>(dto);
            await _employeeRepository.AddAsync(employee);
            await _employeeRepository.SaveAsync();
        }

        public async Task<bool> UpdateAsync(int id, EmployeeUpdateDTO dto)
        {
            var employee = await _employeeRepository.GetByIdAsync(id);
            if(employee == null)
            {
                return false;
            }
            var department = await _DepartmentRepository.GetByIdAsync(dto.DepartmentId);
            if(department == null)
            {
                throw new Exception("Department not found");
            }

            _mapper.Map(dto, employee);

            await _employeeRepository.SaveAsync();

            return true;

        }
    }
}
