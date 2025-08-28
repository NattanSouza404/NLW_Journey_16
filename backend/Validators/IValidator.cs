namespace backend.Validators
{
    public interface IValidator<T>
    {
        void Validar(T t);
    }
}