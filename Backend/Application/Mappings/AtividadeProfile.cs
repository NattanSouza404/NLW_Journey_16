using AutoMapper;
using Backend.Application.DTOs;
using Backend.Domain.Models;

namespace Backend.Application.Mappings
{
    public class AtividadeProfile : Profile
    {
        public AtividadeProfile()
        {
            CreateMap<Atividade, AtividadeDTO>();
            CreateMap<AtividadeDTO, Atividade>();
        }
    }
}