using System.ComponentModel.DataAnnotations;

namespace Backend.Application.DTOs
{
    public record CriarAtividadeDTO
    {
        [Required]
        public required string Nome { get; set; }
        
        [Required]
        public required DateTime Data { get; set; }
    }
}