using backend.Models;

namespace backend.Validators.Impl.AtividadeValidator
{
    public class DataValidator : IValidator<Atividade>
    {
        public void Validar(Atividade atividade)
        {
            if (atividade.Data > DateTime.Now && atividade.Finalizada)
            {
                throw new ArgumentException("Não há como atividade ter sido finalizada se ela ainda não ocorreu!");
            }
        }
    }
}