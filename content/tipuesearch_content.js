var tipuesearch = {"pages": [{'title': 'About', 'text': '成員:41023106、41023113、41023125、41023153 \n 2ag5倉儲: https://github.com/mdecd2023/2a2-pj2ag5.git \n 2ag5網站: https://mdecd2023.github.io/2a2-pj2ag5 \n \n \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n \n', 'tags': '', 'url': 'Brython_ex2.html'}, {'title': 'w9', 'text': '使用zmqRemoteAPI與組員協同控制 w9 專案，先匯入場景，使用ipconfig獲取場景ip，將python程式ip進行更改，接著啟動程式，便可操控 \n \n /downloads/zmq_bubbleRob_red_green.ttt \n /downloads/1.py \n /downloads/2.py \n /downloads/3.py \n /downloads/4.py \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': "1.What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n chatgpt: zmqRemoteAPI 是指基於 ZeroMQ（一種高效的消息傳輸庫）的遠程API（應用程序編程接口），可用於與 CoppeliaSim 仿真軟體進行通訊。 CoppeliaSim 是一個強大的通用機器人仿真軟體，允許用戶設計，模擬和驗證各種機器人系統。 \n zmqRemoteAPI 允許用戶通過編程語言（如Python、C ++、Java等）與CoppeliaSim進行通訊，從而可以遠程控制和監視仿真場景。 例如，用戶可以通過zmqRemoteAPI控制機器人在仿真環境中移動，並獲取傳感器數據或仿真結果。這使得用戶可以進行自動化測試，優化控制算法等。 \n 總之，zmqRemoteAPI提供了一個強大的工具，使得用戶可以通過編程語言與CoppeliaSim進行通訊，從而實現更強大的仿真控制和自動化。 \n bing: zmqRemoteAPI 是 CoppeliaSim 的一種遠程 API，它允許外部應用程序或遠程硬件（例如真實機器人、遠程計算機等）從外部控制仿真（或仿真器本身）1。 zmqRemoteAPI 可以通過多種方式與 CoppeliaSim 進行連接，其中之一就是 ZeroMQ 遠程 API。ZeroMQ 遠程 API 允許從外部應用程序或遠程硬件（例如真實機器人、遠程計算機等）控制仿真（或仿真器本身）1。 ZeroMQ 遠程 API 提供了所有 API 函數，這些函數也可以通過 CoppeliaSim 腳本使用：這包括所有常規 API 函數（即 sim.* -type 函數），但也包括所有 API 函數提供的。 \n \n \n _________________________________________________________________ \n \n \n 2.How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n 下載 /downloads/zmqRemoteApi.7z 解壓縮 \n # pip install pyzmq cbor keyboard\n #這是安裝所需的Python庫，包括zmqRemoteAPI、pyzmq、cbor和keyboard。\nfrom zmqRemoteApi import RemoteAPIClient \n#這是從zmqRemoteAPI庫中導入RemoteAPIClient類，用於與CoppeliaSim建立連接。\nimport keyboard\n\nclient = RemoteAPIClient('192.168.254.72', 23000) \n#這是從zmqRemoteAPI庫中導入RemoteAPIClient類，用於與CoppeliaSim建立連接。 \n \n _________________________________________________________________ \n \n 3.What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n 使用 zmqRemoteAPI，可以實現許多在 CoppeliaSim 中的常見用例，例如： \n \n \n 遠程控制和監視仿真：通過 zmqRemoteAPI，用戶可以從自己的應用程序中發送命令和數據到 CoppeliaSim，並接收來自 CoppeliaSim 的反饋信息，從而遠程控制和監視仿真過程。這對於進行遠程仿真、調試和測試非常有用。 \n \n \n 與外部硬件設備集成：使用 zmqRemoteAPI，用戶可以將 CoppeliaSim 與外部硬件設備集成，例如傳感器、執行器等。這可以模擬現實世界的情況，並使用戶能夠測試和驗證他們的控制算法和系統設計。 \n \n \n 自定義應用程序開發：zmqRemoteAPI 提供了一種靈活和強大的方法來開發自定義應用程序，這些應用程序可以與 CoppeliaSim 集成並使用其仿真能力。例如，可以開發用於自主導航、物流和智能製造的應用程序。 \n \n \n 與其他軟件系統集成：zmqRemoteAPI 還可以用於將 CoppeliaSim 與其他軟件系統集成，例如 ROS（機器人操作系統）、MATLAB 和 Simulink 等。這可以擴展 CoppeliaSim 的功能，使其與其他系統協同工作，從而實現更複雜的仿真場景和控制算法。 \n \n \n \n \n _________________________________________________________________ \n \n 4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n \n 使用 zmqRemoteAPI 與其他 Python 與 CoppeliaSim 之間的通訊方式相比，其優點如下：  快速：zmqRemoteAPI 通訊速度快，因為它是基於 ZeroMQ 高效的通訊協議建立的。ZeroMQ 具有低延遲、低傳輸成本、高可靠性和高效能等優點，因此可以實現高效的通訊。  穩定：zmqRemoteAPI 是 CoppeliaSim 官方推薦的 Python 通訊方式之一，因此具有較高的穩定性和可靠性。  易於使用：zmqRemoteAPI 提供了簡單易用的 API，使用者可以方便地實現 Python 與 CoppeliaSim 之間的通訊 \n \n _________________________________________________________________ \n \n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n 例如我們 使用zmqRemoteAPI與組員協同控制 w9 專案，先匯入場景，使用ipconfig獲取場景ip，將python程式ip進行更改，接著啟動程式，便可操控 \n \n _________________________________________________________________   \n", 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': "\n 使用之前組別足球場去改版 足球場.STL \n 測試版先使用 使用長方體擺放成七段顯示器的樣子 \n 測試1.ttt \n 建立方式為: \n Add>Primitive shape>cuboid \n (加入>原始物件>長方體) \n 初始第一版 記分板 記分板ok.stl \n 測試用記分板.ttt \n __________________________________________________________________________ \n 2023/5/1 \n 場景組: \n 第二版記分板v1: \n 使用Onshape繪製我們需要的七段顯示器圖檔，繪製完成後， 匯入 File>Import>Mesh \n ，匯入後進行爆炸拆件， Edit>Gourping>Divide selected shape ，因為我們是使用變換物件顏色來顯示得分數字，所以物件導入後的拆件動作件特別重要。 \n \n 第二版計分版v2: \n 由於第二版記分板v1，無法在Coppeliasim爆炸成個別零件 ，無法達成我們想改變計分板顏色來實現計分功能的計畫， 因此畫了第二版v2 ，順利完成爆炸拆件。 \n scoreboard.ttt \n \n \n 程式組: \n \n 讓元件變色的方法: \n --  取得物體句柄: \n objectHandle = sim.getObjectHandle('ObjectName') \n 像是給程式物件的編號。 \n --  取得原始顏色: \n originalColor = sim.getShapeColor(objectHandle, nil, sim.colorcomponent_ambient_diffuse) \n \n --  定義新的顏色: \n newColor = {1, 0, 0} \n \n --  設定新的顏色: \n sim.setShapeColor(objectHandle, nil, sim.colorcomponent_ambient_diffuse, newColor) \n \n \n \n \n 應用上面所做的所有工作我們製作出: \n 四個數字都能透過顏色改變顯示0-9的功能。 \n 影片還未推上來。 \n 七段顯示器顯示示意畫面: \n \n \n 程式碼中的函數定義如下： \n handles：二維陣列， 用於儲存分數板上的每個數字或字母的句柄（handle） ，以便後續的編程控制。 \n \n color： 二維陣列 ，儲存兩種顏色值，用於 改變分數板上的數字 或字母的顏色。 \n \n specialNumbers： 二維陣列 ， 儲存了每個數字或字母在分數板上的哪些線段需要亮起 ，以便在後續的編程控制中能夠選擇需要亮起的線段。 \n \n serialNumber：一維陣列， 儲存了分數板上的字母或數字標記 。 \n \n Number：用於將一個數字或字母顯示在分數板上，並且根 據specialNumbers陣列中的數據將需要亮起的線段顯示為顏色color[1] 。 \n sysCall_init：V-REP仿真環境中的初始化函數，用於 將分數板上每個數字或字母的句柄儲存到handles陣列 中。 \n sysCall_cleanup：V-REP仿真環境中的清理函數，用於 將分數板上的所有數字或字母的顏色恢復為color[2] 。 \n 2023/5/1協同影片 \n \n", 'tags': '', 'url': 'w11.html'}, {'title': '程式', 'text': '\xa0 \n function randomNumber()\n    math.randomseed(os.time())\n    return {tonumber(math.random(-2, 2) .. \'.\' .. math.random(0,9)),tonumber(math.random(-1, 1) .. \'.\' .. math.random(0,4)),1.0}\nend\n--這段程式碼定義了一個名為randomNumber的函數，當被呼叫時，它會產生一個由三個數字組成的列表（list），這三個數字是從指定範圍中隨機選擇而來的。\n--在此函數中，首先使用math.randomseed(os.time())函數設置一個隨機數種子，以保證每次呼叫randomNumber函數時，產生的隨機數是不同的。\n--接下來，使用math.random(-2, 2)函數從-2到2之間選擇一個整數，並使用math.random(0,9)函數從0到9之間選擇一個整數，這兩個整數組合起來成為一個小數，表示為第一個數字。\n--同樣地，使用math.random(-1, 1)函數從-1到1之間選擇一個整數，並使用math.random(0,4)函數從0到4之間選擇一個整數，這兩個整數組合起來成為另一個小數，表示為第二個數字。\n--最後，固定設置第三個數字為1.0，並將這三個數字放入一個列表中，作為函數的返回值。\n\n\nfunction regress()\n    sim.pauseSimulation()\n    sim.setObjectPosition(bubbleRobBase, -1, initialBubbleRobPosition)\n    sim.setObjectOrientation(bubbleRobBase, -1, initialBubbleRobOrientation)\n    sim.setObjectPosition(ball, -1, randomNumber())\n    sim.setObjectOrientation(ball, -1, initialballOrientation)\n    sim.setObjectPosition(23, -1, initia)\n    sim.setObjectOrientation(23, -1, initial)\nend\n--這段程式碼包含一個名為regress()的函數，用於將機器人和球體重置到遊戲開始時的位置。\n--在函數內部，程式暫停模擬運行，並使用sim.setObjectPosition()和sim.setObjectOrientation()函數將機器人和球體移回初始位置。\n\nfunction Toclear()\n    for i = 1, 7 do\n        for x = 1, 4 do\n            handle = handles[x][i]\n            sim.setShapeColor(handle, nil, sim.colorcomponent_ambient_diffuse, color[2])\n        end\n    end\nend\n--Toclear的函數，它的作用是清除計分板，也就是把所有的計分板LED燈恢復到預設的顏色。\n\n--函數使用了巢狀的for迴圈，首先從1到7遍歷一遍行，然後再從1到4遍歷一遍列，這樣就可以遍歷所有的計分板LED燈。\n\n--在迴圈內部，函數通過handle變量獲取每個LED燈的控制句柄，然後使用sim.setShapeColor函數將其顏色設置為預設顏色（在color表中的索引為2的顏色）。\n--這樣，所有的計分板LED燈都會被恢復到預設的顏色，從而達到清除計分板的目的。\n\nfunction Number(displayNumber,ser)\n    for i = 1, 7 do\n        for j = 1, #specialNumbers[ser] do\n            if i == specialNumbers[ser][j] then\n                sim.setShapeColor(handles[displayNumber][i], nil, sim.colorcomponent_ambient_diffuse, color[1])\n                break\n            end\n        end\n    end\nend\n\n\n--這段程式碼是一個顯示數字的函數，它有兩個參數，一個是要顯示的數字 displayNumber，另一個是顯示器的類型 ser。\n--這個函數的作用是將 displayNumber 這個數字顯示在屏幕上，屏幕的類型由 ser 決定。\n\n--程式碼使用了嵌套的迴圈，第一個迴圈從 1 到 7 遍歷了七個數碼的 LED 顯示燈，第二個迴圈從 1 到 specialNumbers[ser] 的長度遍歷了指定類型的顯示屏上的特殊數碼。\n--對於每個數碼燈，它會檢查這個燈是否是指定類型的顯示屏上的特殊數碼。如果是，它就會將該燈的顏色設置為顯示數字的顏色。\n\n\nfunction scoreboard(number)\n    local numberString = tostring(number)\n    if #numberString < 2 then\n        numberString = \'0\' .. numberString\n    end\n    local tensDigit = tonumber(numberString:sub(1, 1))\n    local onesDigit = tonumber(numberString:sub(2, 2))\n    return{tensDigit,onesDigit}\nend\n\n--這段程式碼定義了一個名為 scoreboard 的函數，該函數接受一個整數 number 作為參數，並將其轉換為兩位數的字串表示。\n\n--如果傳入的 number 參數的長度小於2，則會在數字前面添加一個0，這樣就可以確保數字的表示總是兩位數。\n--然後，這個函數會提取這個兩位數字串的每一位數字，分別存儲在一個名為 tensDigit 的變數和一個名為 onesDigit 的變數中。最後，這個函數會返回一個包含這兩個數字的表。\nfunction sysCall_init()\n    sensor1 = sim.getObject(\'./door1\')\n    sensor2 = sim.getObject(\'./door2\')\n    bubbleRobBase = 16\n    ball = 30\n    initialBubbleRobPosition = sim.getObjectPosition(bubbleRobBase, -1)\n    initialBubbleRobOrientation = sim.getObjectOrientation(bubbleRobBase, -1)\n    initia = sim.getObjectPosition(23, -1)\n    initial = sim.getObjectOrientation(23, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n    -- do some initialization here\n    count = 18000  -- ??30????????????\n    score1 = 0  -- ??????\n    score2 = 0\n\n    xml = [[\n        <ui closeable="false" resizeable="false" activate="false">\n            <label text="30:00" style="* {background-color: #F00; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="10"/>\n            <label text="0" style="* {background-color: #071E4B; color: #FFF ; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="20"/>\n            <label text="0" style="* {background-color: #071E4B; color: #FFF ; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="30"/>\n        </ui>\n    ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\n    for i = 1, 7 do\n        for x = 1, 4 do\n            ii = tostring(x) .. serialNumber[i]\n            local handle = sim.getObjectHandle("./scoreboard/".. ii )\n            handles[x][i] = handle\n        end\n    end\nend\n--透過sim.getObject()取得門的物件句柄，並存入sensor1和sensor2變數中。\n指定bubbleRobBase和ball變數分別為16和30，代表這些物件在模擬場景中的物件句柄。\n透過sim.getObjectPosition()和sim.getObjectOrientation()取得模擬場景中物件的位置和方向資訊，\n分別存入initialBubbleRobPosition、initialBubbleRobOrientation、initialballPosition和initialballOrientation變數中。\n將23號物件的位置和方向資訊分別存入initia和initial變數中。\n將count、score1和score2分別初始化為18000、0和0。\n創建一個簡單的UI介面，包含三個標籤(label)元件，分別代表倒數計時、兩個隊伍的得分。\n將介面移動到視窗左上角，並將其設為不可關閉、不可縮放和不可激活。\n設定用於記分牌的物件的物件句柄並存儲在handles二維陣列中。透過一個雙重迴圈，\n將所有的記分牌物件句柄存儲到handles變數中。(handles 是一個二維陣列，\n用於儲存多個物體在仿真環境中的句柄（handle）。\n二維陣列意味著它包含多個一維陣列，每個一維陣列都儲存了某一個維度上的物體句柄。\n在這裡，handles 有四個一維陣列，分別儲存了四個不同的元件在七個不同位置的句柄。\n通過這個二維陣列，程式可以方便地訪問並修改這些物體的屬性。)\nfunction sysCall_actuation()\n    result1=sim.readProximitySensor(sim.getObject(\'./door1\'))\n    result2=sim.readProximitySensor(sim.getObject(\'./door2\'))\n    -- 0 or 1\n    if(result1>0)then\n        regress()\n        score1 = score1 +1 \n        \n    end\n--此函數為一個回調函數，它會在仿真器每個時間步驟中被自動調用。在此函數中，首先透過sim.getObject(\'./door1\')和sim.getObject(\'./door2\')獲取到與感測器關聯的對象。\n然後通過sim.readProximitySensor函數檢測與感測器對應的物體是否被觸發，\n並將檢測結果存儲在result1和result2變量中。\n如果result1大於0，表示感測器檢測到物體，此時會調用regress()函數和加分操作，即分數score1加1。\n\n  if(result2>0)then\n        regress()\n        score2 = score2 +1 \n\n    end\n--如果result2大於0，表示感測器檢測到物體，此時會調用regress()函數和加分操作，即分數score2加1。\nif count > 0 then\n        count = count - 1\n        local minutes = math.floor(count / 60)\n        local seconds = count % 60\n        local timeStr = string.format("%d:%02d", minutes, seconds)\n        simUI.setLabelText(ui, 10, timeStr)\n        simUI.setLabelText(ui, 20, tostring(score1))\n        simUI.setLabelText(ui, 30, tostring(score2))\n        red = scoreboard(score1)\n        blue = scoreboard(score2)\n        Toclear()\n        for i = 1, 2 do\n            Number(i,red[i])\n            Number(i+2,blue[i])\n        end\n    else\n        sim.stopSimulation()\n    end\n\nend\n--此段程式碼為在仿真環境中，用來更新計分板和倒數計時器的功能。\n當遊戲倒數計時器仍有剩餘時間（count > 0），會依照每個計數間隔（1秒）進行更新。\n更新內容包含：剩餘時間的計算、將計算後的時間顯示在UI的倒數計時器上、顯示當前紅藍雙方的得分，\n同樣也是透過UI的label顯示。\n接著，程式會進入計分板的顯示功能。這邊透過呼叫Toclear()，先清除所有計分板的數字。\n再透過迴圈讀取紅藍雙方的分數，分別呼叫Number()函數，在計分板上顯示對應的數字。\n若遊戲倒數計時器已歸零，則程式會執行sim.stopSimulation()，停止遊戲仿真。\nfunction sysCall_cleanup()\n    Toclear()\nend\n--此程式為清理函數，當仿真停止時，會呼叫此函數，其目的為將目前顯示在分數板上的數字全部清除，使得下一次的遊戲能夠從零開始顯示分數。在此函數中，會呼叫之前已定義的Toclear()函數，該函數會將所有的數字方塊改變為背景色，以達到清空的效果。\n\n\n\n \n \xa0 \n \xa0 \n \n __________________________________________________________________________ \n', 'tags': '', 'url': '程式.html'}, {'title': '機械式記分板', 'text': '2023/5/7 \n 第三版記分板: \n 因前面對老師的要求理解錯誤，我們做成隨得分改變顏色的記分板設計，因此做了這版來滿足老師所要求的機械式設計。 \n \n \n 上圖紅色圓形部分為固定銷，白色圓形部分是可向前推動的銷，可實現將桿件向前推送達成數字顯示的效果。 \n 記分板(機械式.stl) \n 第四版 \n /downloads/機械計分.ttt \n 使用原理:使用joint推動顯示器使其顯示數字 \n 馬達 \n Add>Joint>Prismatic', 'tags': '', 'url': '機械式記分板.html'}, {'title': '機械程式', 'text': "如何操控馬達? \n joint=sim.getObjectHandle('./joint')\nsim.setJointTargetPosition(joint,0.1)\nsim.setJointTargetPosition(joint,0) \n", 'tags': '', 'url': '機械程式.html'}, {'title': 'ssh', 'text': '(登入 stud2.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud2.cycu.org:\xa0 在命令列視窗, 以  ssh\xa0 cd學號@stud2.cycu.org  , 輸入對應密碼後, 可以登入系統 \xa0 \n 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用  ssh-keygen  建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \xa0 \n 利用 sftp\xa0 進入 stud2.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud2.cycu.org 主機的 .ssh 目錄中. \xa0 \n 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以  git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 設定供 https 連線使用的代理主機, 並且以\xa0  git config --global\xa0 user.name "<名字>" \xa0以及\xa0  git config --global\xa0 user.email "<信箱>"  設定提交用的身分註記. \xa0 \n 在 stud2.cycu.org 中, 以  git clone <預取下的倉儲>\xa0 取下倉儲 \n 接著下載\xa0 server.py , 在 Windows 編輯 \xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存. \xa0 檔, 以 sftp 放入上列取下的倉儲根目錄 \n 在 stud2.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行\xa0 python3 server.py\xa0 , 就可啟用動態網站. \xa0 \n 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站), https://stud2.cycu.org:8xxxx 看到個人的動態網站. \n 動態網站改版後, 轉為靜態, 必須透過\xa0 source\xa0 acp \xa0 以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性)。 \n', 'tags': '', 'url': 'ssh.html'}, {'title': '相關連結', 'text': 'CoppeliaSim 4.3.0 使用者手冊 \n chatGTP \n 建立倉儲 \n 建立token \n 可攜 \n', 'tags': '', 'url': '相關連結.html'}, {'title': 'key.py', 'text': 'key.py \n key.bat \n', 'tags': '', 'url': 'key.py.html'}, {'title': '相關指令', 'text': '', 'tags': '', 'url': '相關指令.html'}, {'title': '取消commit', 'text': 'git中如何取消 commit 操作 \n git reset --soft HEAD^ \n 這個命令將撤銷最後一個提交，但保留更改。如果您需要撤銷更多的提交，可以使用 HEAD~n \n 其中 n 是要撤銷的提交數量。例如，如果您要撤銷最後兩個提交，可以使用以下命令： \n git reset --soft HEAD~2 \n \n', 'tags': '', 'url': '取消commit.html'}, {'title': '恢復之前版本', 'text': 'Git恢复之前版本的两种方法reset、revert（图文详解） \n git reset --hard <目標版本號> \n \n', 'tags': '', 'url': '恢復之前版本.html'}, {'title': '強制push', 'text': 'Git 推送強制更改 \n git push origin main --force \n', 'tags': '', 'url': '強制push.html'}]};