using Backend.Models;
using Backend.Validators.Impl.AtividadeValidator;

namespace Backend.Tests.Validator.AtividadeValidator;

public class DataValidatorTest
{
    [Fact]
    public void ValidarData()
    {
        DataValidator validator = new();

        Atividade atividadeValida = new()
        {
            Data = new DateTime(1900, 12, 30),
            Finalizada = true
        };

        Atividade atividadeFuturaJaRealizada = new()
        {
            Data = new DateTime(9999, 12, 30),
            Finalizada = true
        };

        Atividade atividadeFuturaNaoRealizada = new()
        {
            Data = new DateTime(9999, 12, 30),
            Finalizada = false
        };

        validator.Validar(atividadeValida);

        Assert.Throws<ArgumentException>(
            () =>
            {
                validator.Validar(atividadeFuturaJaRealizada);
            }
        );

        validator.Validar(atividadeFuturaNaoRealizada);
    }
}
