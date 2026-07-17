using AutoMapper;
using EmployeeManagement.API.DTOs.Department;
using EmployeeManagement.API.DTOs.Employee;
using EmployeeManagement.API.Models;

namespace EmployeeManagement.API.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {

            // Employee 
            CreateMap<Employee, EmployeeResponseDTO>()
                .ForMember(
                dest => dest.DepartmentName,
                opt => opt.MapFrom(src => src.Department.Name)
                );

            CreateMap<EmployeeCreateDTO, Employee>();

            CreateMap<EmployeeUpdateDTO, Employee>();


            // Department 
            CreateMap<DepartmentCreateDTO, Department>();

            CreateMap< Department , DepartmentResponseDTO>();

        }
    }
}
