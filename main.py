from flask import Flask, request, render_template, redirect, url_for, flash


app = Flask(__name__)

@app.route('/', methods=['GET'])
def render_index():
    return render_template('index.html')


@app.route('/pimp_immi', methods=['GET'])
def render_pimp_immi():
    choice = "/static/images/immi.png"
    return render_template('pimp.html', choice=choice)


@app.route('/pimp_laci', methods=['GET'])
def render_pimp_laci():
    choice = "/static/images/laci.png"
    return render_template('pimp.html', choice=choice)


if __name__ == "__main__":
    app.run(debug=True)