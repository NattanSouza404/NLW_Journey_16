using AutoMapper;
using Backend.DTOs;
using Backend.Models;
using Backend.Repositories;

namespace Backend.Services
{
    public class AtividadeService(
        IAtividadeRepository repository,
        IMapper mapper
    ) : IAtividadeService
    {
        private readonly IAtividadeRepository _repository = repository;
        private readonly IMapper _mapper = mapper;
        
        public async Task<IEnumerable<AtividadeDTO>> ConsultarTodosAsync()
        {
            return _mapper.Map<IEnumerable<AtividadeDTO>>(
                await _repository.ConsultarTodosAsync()
            );
        }

        public async Task<AtividadeDTO?> ConsultarPorIdAsync(int id)
        {
            return _mapper.Map<AtividadeDTO>(
                await _repository.ConsultarPorIdAsync(id)
            );
        }

        public async Task<AtividadeDTO> CriarAsync(CriarAtividadeDTO dto)
        {
            Atividade atividade = new(dto.Nome, dto.Data);

            return _mapper.Map<AtividadeDTO>(
                await _repository.CriarAsync(atividade)
            );
        }

        public async Task<bool> AtualizarAsync(int id, AtualizarAtividadeDTO dto)
        {
            Atividade? atividade = await _repository.ConsultarPorIdAsync(id);

            if (atividade == null)
            {
                return false;
            }

            atividade.Atualizar(dto.Nome, dto.Data);

            return await _repository.AtualizarAsync(atividade);
        }

        public async Task<bool> AtualizarFinalizacaoAsync(int id)
        {
            Atividade? atividade = await _repository.ConsultarPorIdAsync(id);

            if (atividade == null)
            {
                return false;
            }

            if (atividade.Finalizada)
            {
                atividade.DesfazerFinalizacao();
            }
            else
            {
                atividade.Finalizar();
            }

            return await _repository.AtualizarAsync(atividade);
        }

        public async Task<bool> DeletarAsync(int id)
        {
            return await _repository.DeletarAsync(id);
        }
    }
}