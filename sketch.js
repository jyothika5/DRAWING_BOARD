let canvas
        let current_tool = 'pencil'
        let current_color = '#000000'
        let current_thickness = 5

        function setup() {
            const canvas_width = min(710, windowWidth * 0.9)
            canvas = createCanvas(canvas_width, 400)
            canvas.parent('paper')
            background(255)
        }