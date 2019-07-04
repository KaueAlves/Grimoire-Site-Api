Para resolver problemas em bancos MYSQL antigos.
edite seu arquivo AppServiceProvider.php e dentro do método boot defina o padrão de tamanho da string:

    use Illuminate\Support\Facades\Schema;

    public function boot()
    {
        Schema::defaultStringLength(191);
    }