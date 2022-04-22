from flask import Flask
from flask_restful import Api, Resource
from web3 import Web3
import os

app = Flask(__name__)
api = Api(app)

w3 = Web3(Web3.HTTPProvider('https://rinkeby.infura.io/v3/80cd20a6eaac4e7aa4249e7aaff12c9d'))


class DeployLottery(Resource):
    def get(self):
        command = "brownie run scripts/deploy_lottery.py --network rinkeby"
        os.system(command)
        return {"data": "Deployed Lottery"}

api.add_resource(DeployLottery, "/deploy_lottery")

if __name__ == "__main__":
    app.run(debug=True)