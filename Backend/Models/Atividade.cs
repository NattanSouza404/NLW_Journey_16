using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("atividades")]
    public class Atividade
    {
        [Column("atv_id")]
        [Key]
        public int Id { get; set; }

        [Column("atv_nome")]
        [Required]
        [MaxLength(100)]
        public string? Nome { get; set; }

        [Column("atv_data")]
        [Required]
        public DateTime Data { get; set; }

        [Column("atv_finalizada")]
        public bool Finalizada { get; set; }

    }
}