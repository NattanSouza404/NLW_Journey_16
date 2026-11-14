namespace Backend.Application.DTOs
{
    public record AtualizarAtividadeDTO
    {
        public string? Nome { get; set; }
        public DateTime? Data { get; set; }
    }
}