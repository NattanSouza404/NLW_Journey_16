using AutoMapper;
using Backend.DTOs;
using Backend.Models;

namespace Backend.Mappings
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