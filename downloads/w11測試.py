# pip install pyzmq cbor keyboard
from zmqRemoteApi import RemoteAPIClient
import keyboard
import random
import time

client = RemoteAPIClient('127.0.0.1', 23000)

print('Program started')
sim = client.getObject('sim')
sim.startSimulation()
print('Simulation started')
ground_handle = sim.getObject("/Floor")
# 取得 floor handle
# 準備丟下的球數量
num_of_ball = 20
# 準備丟下的球尺寸
size = [0.1, 0.1, 0.1]
# 統一從高處丟下
z_pos = 1
# 利用 for 迴圈丟球
    # 利用 createPureShape 建立圓球, 第一變數 0 為 cuboid, 1 為 sphere
    # 第二變數 8 表示所建立的物件 respondable
    # 參數設定參考 https://www.coppeliarobotics.com/helpFiles/en/regularApi/simCreatePureShape.htm
sphere_handle = sim.createPureShape(1, 8	, size, 1, None)
# 利用浮點數建立座標位於 -1, 1 之間
x_pos = random.uniform(-1, 1)
y_pos = random.uniform(-1, 1)


    # 列出座標查驗
    # print(x_pos, y_pos)
    # 設定丟球的座標
_ = sim.setObjectPosition(sphere_handle, ground_handle, [x_pos, y_pos, z_pos])
    # wait for a moment to observe the simulation

def setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity):
    leftMotor = sim.getObject('/leftMotor1')
    rightMotor = sim.getObject('/rightMotor1')
    sim.setJointTargetVelocity(leftMotor, leftWheelVelocity)
    sim.setJointTargetVelocity(rightMotor, rightWheelVelocity)

'''
# Example usage 1:
setBubbleRobVelocity(1.0, 1.0)
time.sleep(2)
setBubbleRobVelocity(0.0, 0.0)
'''
# use keyborad to move BubbleRob

while True:
    if keyboard.is_pressed('w'):
        setBubbleRobVelocity(1.0, 1.0)
    elif keyboard.is_pressed('s'):
        setBubbleRobVelocity(-1.0, -1.0)
    elif keyboard.is_pressed('a'):
        setBubbleRobVelocity(-1.0, 1.0)
    elif keyboard.is_pressed('d'):
        setBubbleRobVelocity(1.0, -1.0)
    elif keyboard.is_pressed('q'):
        # stop simulation
        sim.stopSimulation()
    else:
        setBubbleRobVelocity(0.0, 0.0)




