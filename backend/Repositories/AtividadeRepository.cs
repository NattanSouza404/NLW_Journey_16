using Microsoft.EntityFrameworkCore;

using backend.Models;
namespace backend.Repositories
{
    public class AtividadeRepository(AppDbContext context) : IAtividadeRepository
    {
        private readonly AppDbContext _context = context;

        public async Task<IEnumerable<Atividade>> ConsultarTodosAsync()
        {
            return await _context.Atividades.OrderBy(a => a.Data).ToListAsync();
        }

        public async Task<Atividade?> ConsultarPorIdAsync(int id)
        {
            return await _context.Atividades.FindAsync(id);
        }

        public async Task<Atividade> CriarAsync(Atividade atividade)
        {
            _context.Atividades.Add(atividade);
            await _context.SaveChangesAsync();
            return atividade;
        }

        public async Task<bool> AtualizarAsync(Atividade atividade)
        {
            var existente = await _context.Atividades.FindAsync(atividade.Id);
            if (existente == null)
                return false;

            _context.Entry(existente).CurrentValues.SetValues(atividade);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeletarAsync(int id)
        {
            var atividade = await _context.Atividades.FindAsync(id);
            if (atividade == null)
                return false;

            _context.Atividades.Remove(atividade);
            await _context.SaveChangesAsync();
            return true;
        }

    }
}
