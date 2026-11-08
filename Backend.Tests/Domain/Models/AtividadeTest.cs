using Backend.Domain.Models;

namespace Backend.Tests.Domain.Models;

public class AtividadeTest
{
    [Fact]
    public void FinalizarAtividade()
    {
        Atividade atividade = new(
            "Atividade",
            new DateTime(1900, 12, 30)
        );

        atividade.Finalizar();

        Assert.True(atividade.Finalizada);
    }

    [Fact]
    public void AtualizarAtividade()
    {
        Atividade atividade = new(
            "Atividade",
            new DateTime(1900, 12, 30)
        );

        atividade.Atualizar("Atividade Atualizada", new DateTime(1900, 12, 31));

        Assert.Equal("Atividade Atualizada", atividade.Nome);
        Assert.Equal(new DateTime(1900, 12, 31), atividade.Data);
    }

    [Fact]
    public void AtualizarAtividade_ComNulo_DeveManterValoresOriginais()
    {
        Atividade atividade = new(
            "Atividade",
            new DateTime(1900, 12, 30)
        );

        atividade.Atualizar(null, null);

        Assert.Equal("Atividade", atividade.Nome);
        Assert.Equal(new DateTime(1900, 12, 30), atividade.Data);
    }

    [Fact]
    public void AtividadeFutura_DeveFalhar_AoAtualizar()
    {
        Assert.Throws<ArgumentException>(
            () => {
                Atividade atividade = new(
                    "Atividade",
                    new DateTime(1900, 12, 30)
                );

                atividade.Finalizar();

                atividade.Atualizar("Atividade Atualizada", new DateTime(9999, 12, 30));
            }
        );
    }

    [Fact]
    public void AtividadeAntiga_DeveDarSucesso_AoAtualizar()
    {
        Atividade atividade = new(
            "Atividade",
            new DateTime(1900, 12, 30)
        );

        atividade.Finalizar();

        atividade.Atualizar("Atividade Atualizada", new DateTime(1800, 12, 30));
    }

    [Fact]
    public void AtividadeFutura_DeveFalhar_AoFinalizar()
    {
        Assert.Throws<ArgumentException>(
            () => {
                Atividade atividade = new(
                    "Atividade",
                    new DateTime(9999, 12, 30)
                );

                atividade.Finalizar();
            }
        );
    }

    [Fact]
    public void DesfazerFinalizacao_DeveFuncionar()
    {
        Atividade atividade = new(
            "Atividade",
            new DateTime(1900, 12, 30)
        );

        atividade.Finalizar();
        atividade.DesfazerFinalizacao();

        Assert.False(atividade.Finalizada);
    }
}
