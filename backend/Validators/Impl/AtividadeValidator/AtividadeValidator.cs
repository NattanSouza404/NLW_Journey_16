using backend.Models;

namespace backend.Validators.Impl.AtividadeValidator
{
    public class AtividadeValidator(IEnumerable<IValidator<Atividade>> validators) : IValidator<Atividade>
    {
        private readonly IEnumerable<IValidator<Atividade>> _validators = validators;

        public void Validar(Atividade atividade)
        {
            foreach (var validator in _validators)
            {
                validator.Validar(atividade);
            }
        }
    }
}