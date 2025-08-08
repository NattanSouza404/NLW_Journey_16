using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using backend.Models;
using backend.Repositories;

//using System.Web.Mvc;
//using System.Web.Mvc.Ajax;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{

    [ApiController]
    [Route("/api/[controller]")]
    public class AtividadeController(IAtividadeRepository repository) : ControllerBase
    {
        private readonly IAtividadeRepository _repository = repository;

        [HttpGet]
        public async Task<IActionResult> ConsultarAtividades()
        {
            IEnumerable<Atividade> atividades = await _repository.ConsultarTodosAsync();

            return Ok(atividades); ;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ConsultarPorId(int id)
        {
            var atividade = await _repository.ConsultarPorIdAsync(id);
            return Ok(atividade);
        }
        
        [HttpPost]
        public async Task<IActionResult> Adicionar([FromBody] Atividade atividade)
        {
            atividade.Data = DateTime.SpecifyKind(atividade.Data, DateTimeKind.Utc);
            return Ok(await _repository.CriarAsync(atividade));
        }
    }
}