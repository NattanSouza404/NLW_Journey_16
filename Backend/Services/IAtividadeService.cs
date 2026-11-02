using Backend.DTOs;

namespace Backend.Services
{
    public interface IAtividadeService
    {
        public Task<IEnumerable<AtividadeDTO>> ConsultarTodosAsync();

        public Task<AtividadeDTO?> ConsultarPorIdAsync(int id);
        
        public Task<AtividadeDTO> CriarAsync(CriarAtividadeDTO dto);

        public Task<bool> AtualizarAsync(int id, AtualizarAtividadeDTO dto);

        public Task<bool> AtualizarFinalizacaoAsync(int id);

        public Task<bool> DeletarAsync(int id);
    }
}