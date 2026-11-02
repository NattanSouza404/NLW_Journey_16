using Backend.DTOs;
using Backend.Services;

using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{

    [ApiController]
    [Route("/api/[controller]")]
    public class AtividadeController(IAtividadeService service) : ControllerBase
    {
        private readonly IAtividadeService _service = service;

        [HttpGet]
        public async Task<IActionResult> ConsultarAtividades()
        {
            return Ok(
                await _service.ConsultarTodosAsync()
            );
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ConsultarPorId(int id)
        {
            return Ok(
                await _service.ConsultarPorIdAsync(id)
            );
        }

        [HttpPost]
        public async Task<IActionResult> Adicionar([FromBody] CriarAtividadeDTO atividade)
        {
            AtividadeDTO novaAtividade = await _service.CriarAsync(atividade);

            return CreatedAtAction(nameof(ConsultarPorId), new { id = novaAtividade.Id }, novaAtividade);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Atualizar(int id, [FromBody] AtualizarAtividadeDTO atividade)
        {
            bool isAtualizado = await _service.AtualizarAsync(id, atividade);

            if (!isAtualizado)
            {
                return BadRequest("Atividade não atualizada.");
            }

            return NoContent();
        }

        [HttpPut("{id}/finalizacao")]
        public async Task<IActionResult> AtualizarFinalizacao(int id)
        {
            bool isAtualizada = await _service.AtualizarFinalizacaoAsync(id);

            if (!isAtualizada)
            {
                return BadRequest("Atividade não atualizada.");
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletar(int id)
        {
            bool atividadeDeletada = await _service.DeletarAsync(id);

            if (!atividadeDeletada)
            {
                return BadRequest("Atividade não deletada.");
            }

            return NoContent();
        }
    }
}