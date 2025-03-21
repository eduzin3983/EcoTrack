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

@app.route('/error')
def error():
    return render_template('erro.html')

if __name__ == '__main__':
    app.run(debug=True)
