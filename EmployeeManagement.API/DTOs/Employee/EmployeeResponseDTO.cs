namespace EmployeeManagement.API.DTOs.Employee
{
    public class EmployeeResponseDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public decimal Salary { get; set; }
        public string DepartmentName { get; set; } = string.Empty;
    }
}
