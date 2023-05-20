<div>Teachable Machine Image Model</div>
<button type="button" onclick="init()">Start</button>
<div id="webcam-container"></div>
<div id="label-container"></div>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"></script>
<script type="text/javascript">
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "./my_model/";

    let model, webcam, labelContainer,  detector;

    // Load the image model and setup the webcam
    async function init() {
        
        
        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        
        const model = handPoseDetection.SupportedModels.MediaPipeHands;
        const detectorConfig = {
		runtime: 'mediapipe', // or 'tfjs',
		  solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
		  modelType: 'lite'
		}
		 detector = await handPoseDetection.createDetector(model, detectorConfig);
		window.requestAnimationFrame(loop);









        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        
    }



    let frameCount=0;
    const skipCount=5;

    async function loop() {
        webcam.update(); // update the webcam frame
        if (frameCount % skipCount==0)
        {

        	const hands = await detector.estimateHands(webcam.canvas);
        	  labelContainer.innerHTML="Бачу" +hands.length+"рук";
             if (hands.length ==1)
             {
             	if(hands[0]handedness=="Right")
             			labelContainer.innerHTML="Піднято праву руку<br>";
             
             	else 
             		labelContainer.innerHTML="Піднято ліву руку<br>";
             }for(let k=0; k<hands[0].keypoints.length;k++)
             		labelContainer.innerHTML+-hands[0].keypoints[k].name + "("hands[0].keypoints[k].x+", " +hands[0].keypoints[k].y+''")<br>";




        }

        window.requestAnimationFrame (loop);
        frameCount++;
       
        }




















import java.util.ArrayList;
import java.util.List;

public class HandposeAngles {
    public static void main(String[] args) {
        // Отримати координати точок MCP та TIP для кожного пальця
        List<Point> mcpPoints = getMCPPoints();
        List<Point> tipPoints = getTIPPoints();

        // Обчислити вектори пальців
        List<Vector> fingerVectors = calculateFingerVectors(mcpPoints, tipPoints);

        // Обчислити кути між пальцями
        List<Double> fingerAngles = calculateFingerAngles(fingerVectors);

        // Вивести кути між пальцями
        for (int i = 0; i < fingerAngles.size(); i++) {
            System.out.println("Кут між пальцями " + i + " та " + (i + 1) + ": " + fingerAngles.get(i) + " градусів");
        }
    }

    // Представлення точки з координатами x та y
    static class Point {
        double x;
        double y;

        Point(double x, double y) {
            this.x = x;
            this.y = y;
        }
    }

    // Представлення вектора з компонентами x та y
    static class Vector {
        double x;
        double y;

        Vector(double x, double y) {
            this.x = x;
            this.y = y;
        }
    }

    // Припустимо, що отримані точки для MCP та TIP зберігаються у відповідних списках

    // Отримати точки MCP для кожного пальця
    static List<Point> getMCPPoints() {
        // Код для отримання точок MCP
        // Повернути список точок MCP
        return new ArrayList<>();
    }

    // Отримати точки TIP для кожного пальця
    static List<Point> getTIPPoints() {
        // Код для отримання точок TIP
        // Повернути список точок TIP
        return new ArrayList<>();
    }

    // Обчислити вектори пальців
    static List<Vector> calculateFingerVectors(List<Point> mcpPoints, List<Point> tipPoints) {
        List<Vector> fingerVectors = new ArrayList<>();

        // Перевірити, чи кількість точок MCP та TIP однакова
        if (mcpPoints.size() != tipPoints.size()) {
            throw new IllegalArgumentException("Кількість точок MCP та TIP не співпадає");
        }

         // Обчислити вектор для кожної пари точок MCP та TIP
        for (int i = 0; i < mcpPoints.size(); i++) {
            Point mcp = mcpPoints.get(i);
            Point tip = tipPoints.get(i);

            // Обчислити вектор за допомогою різниці координат
            double vectorX = tip.x - mcp.x;
            double vectorY = tip.y - mcp.y;

            Vector fingerVector = new Vector(vectorX, vectorY);
            fingerVectors.add(fingerVector);
        }

        return fingerVectors;
    }

    // Обчислити кути між пальцями
    static List<Double> calculateFingerAngles(List<Vector> fingerVectors) {
        List<Double> fingerAngles = new ArrayList<>();

        // Перевірити, чи кількість пальців достатня для обчислення кутів
        if (fingerVectors.size() < 2) {
            throw new IllegalArgumentException("Необхідно принаймні два пальці для обчислення кутів");
        }

        // Обчислити кут між кожною парою векторів пальців
        for (int i = 0; i < fingerVectors.size() - 1; i++) {
            Vector vector1 = fingerVectors.get(i);
            Vector vector2 = fingerVectors.get(i + 1);

            // Обчислити скалярний добуток векторів
            double dotProduct = vector1.x * vector2.x + vector1.y * vector2.y;

            // Обчислити довжини векторів
            double length1 = Math.sqrt(vector1.x * vector1.x + vector1.y * vector1.y);
            double length2 = Math.sqrt(vector2.x * vector2.x + vector2.y * vector2.y);

            // Обчислити косинус кута за допомогою формули скалярного добутку векторів
            double cosAngle = dotProduct / (length1 * length2);

            // Обчислити кут в радіанах та перетворити його в градуси
            double angleRadians = Math.acos(cosAngle);
            double angleDegrees = Math.toDegrees(angleRadians);

            fingerAngles.add(angleDegrees);
        }

        return fingerAngles;
    }
}
















        
    
</script>
