using EmployeeManagement.API.DTOs.Department;
using EmployeeManagement.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;

        public DepartmentController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var departments = await _departmentService.GetallAsync();
            return Ok(departments);
        }

        [HttpPost]
        public async Task<IActionResult> AddDepartment(DepartmentCreateDTO dto)
        {
            await _departmentService.AddAsync(dto);
            return Ok("Department Added Successfully");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartment(int id)
        {
            var result = await _departmentService.DeleteAsync(id);
            if (!result)
            {
                return NotFound("Department Not Found");
            }
            return Ok("Department Deleted Successfully");
        }
    }
}
