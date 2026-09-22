from flask import Flask

app=Flask(__name__)

@app.route("/")
def home():
    return "Hello this is my flask server"

@app.route("/about")
def about():
    return "This is the about us section"

if __name__=="__main__":
    app.run(debug=True)