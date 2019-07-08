Para fazer um cadastro utilizando Token, metodo POST e Laravel:Passport, adicione a função  snigup no arquivo "RegisterController.php" e no inicio do arquivo importe a classe "Request"

    use Illuminate\Http\Request; // Inicio do Arquivo

    protected function signup(Request $request)
    {
        $data = $request->all();
        if($this->validator($data)){
            $user = $this->create($data);
            $user->token = $user->createToken($user->email)->accessToken;
            return $user;
        }
        return false;
    }

E para utilizar essa função crie uma rota que chama a controller "RegisterController.php"

    Route::post('/teste','Auth\RegisterController@signup'); 