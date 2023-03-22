from flask import Flask, render_template, jsonify, url_for
import Adafruit_DHT

app = Flask(__name__,)

sensor = Adafruit_DHT.DHT11
pin = 4

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/data')
def get_data():
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    if humidity is not None and temperature is not None:
        data = {'temperature': temperature, 'humidity': humidity}
        return jsonify(data)
    else:
        return render_template('error.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
