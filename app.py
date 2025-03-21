from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/como-funciona')
def comoFunciona():
    return render_template('como-funciona.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/registrar')
def registrar():
    return render_template('registro.html')

@app.route('/sugestoes')
def sugestoes():
    return render_template('sugestoes.html')

@app.route('/historico')
def sugestoes():
    return render_template('historico.html')

# Rotas de erro
# Tratamento para erro 404 - Página não encontrada
@app.errorhandler(400)
def bad_request(e):
    return render_template('erro.html',
                           error_code=400,
                           error_name="Bad Request",
                           error_description="A requisição não pôde ser processada."), 400

# Tratamento para erro 401 - Não autorizado
@app.errorhandler(401)
def unauthorized(e):
    return render_template('erro.html',
                           error_code=401,
                           error_name="Unauthorized",
                           error_description="Você não está autorizado a acessar este recurso."), 401

# Tratamento para erro 403 - Acesso proibido
@app.errorhandler(403)
def forbidden(e):
    return render_template('erro.html',
                           error_code=403,
                           error_name="Forbidden",
                           error_description="Acesso proibido."), 403

# Tratamento para erro 404 - Página não encontrada
@app.errorhandler(404)
def page_not_found(e):
    return render_template('erro.html',
                           error_code=404,
                           error_name="Página Não Encontrada",
                           error_description="A página que você procura não foi encontrada."), 404

# Tratamento para erro 500 - Erro interno do servidor
@app.errorhandler(500)
def internal_server_error(e):
    return render_template('erro.html',
                           error_code=500,
                           error_name="Erro Interno do Servidor",
                           error_description="Ocorreu um erro interno. Tente novamente mais tarde."), 500

if __name__ == '__main__':
    app.run(debug=True)
