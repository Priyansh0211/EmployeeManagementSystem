using EmployeeManagement.API.DTOs.Employee;
using EmployeeManagement.API.Services.Implementations;
using EmployeeManagement.API.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var employee = await _employeeService.GetAllAsync();
            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee(EmployeeCreateDTO dto)
        {
            await _employeeService.AddAsync(dto);
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var employee = await _employeeService.GetByIdAsync(id);
            if(employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id , EmployeeUpdateDTO dto)
        {
            var result = await _employeeService.UpdateAsync(id, dto);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _employeeService.DeleteAsync(id);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpGet("Department/{departmentId}")]
        public async Task<IActionResult> GetByDepartment(int departmentId)
        {
            var employees = await _employeeService.GetByDepartmentAsync(departmentId);

            return Ok(employees);
        }

        [HttpGet("search")]
        public async Task<IActionResult> Search(string keyword="")
        {
            var employees = await _employeeService.SearchAsync(keyword);
            return Ok(employees);
        }

    }
}
