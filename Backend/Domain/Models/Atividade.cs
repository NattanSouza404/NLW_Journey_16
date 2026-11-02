using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("atividades")]
    public class Atividade(string nome, DateTime data)
    {
        [Column("atv_id")]
        [Key]
        public int Id { get; private set; }

        [Column("atv_nome")]
        [Required]
        [MaxLength(100)]
        public string Nome
        {
            get => _nome;
            private set => _nome = value
                ?? throw new ArgumentNullException(nameof(value));
        }

        [Column("atv_data")]
        [Required]
        public DateTime Data { get; private set; } = data;

        [Column("atv_finalizada")]
        public bool Finalizada { get; private set;} = false;

        public void Atualizar(string? nome, DateTime? data)
        {
            if (Finalizada && data.HasValue && data.Value > DateTime.Now)
                throw new ArgumentException("Não é possível definir uma data futura para uma atividade finalizada.");
            
            if (!string.IsNullOrWhiteSpace(nome))
            {
                Nome = nome;
            }

            if (data is not null)
            {
                Data = data.Value;
            }
        }

        public void Finalizar()
        {
            if (Data > DateTime.Now)
                throw new ArgumentException("Não é possível finalizar uma atividade futura.");

            Finalizada = true;
        }

        public void DesfazerFinalizacao()
        {
            Finalizada = false;
        }

        private string _nome = nome;
    }
}