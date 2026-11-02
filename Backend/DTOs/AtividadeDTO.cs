namespace Backend.DTOs
{
    public record AtividadeDTO
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public DateTime Data { get; set; }
        public bool Finalizada { get; set; }
    }

}