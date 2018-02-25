import  '../styles/index.css'

class PraiseButton {
    constructor() {
    }
    clickAction() {

        this.element.click(() => {
            // if (f) {
            //     clearTimeout(f)
            // }
            axios.get('/index/update')
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });

            // f = setTimeout(() => {
            //         if (this.num < 10) {
            //             this.element.css('-webkit-filter', 'grayscale(0)');
            //             $('#animation').addClass('num');
            //             // this.num = add(this.num);
            //             setTimeout(function() {
            //                 $('#animation').removeClass('num');
            //             }, 1000);
                       
            //         } else {
            //             this.element.css('-webkit-filter', 'grayscale(1)');
            //             this.num = 0;
            //         }
            //         console.log(this.num);
            //     }, 800)

        })
    }
}
// class Thumb extends PraiseButton {
//     constructor(num, element) {
//         super(num, element);
//     }
// }

export default PraiseButton;


/*let f=new Thumb(0,$('#thumb'));
f.clickAction();*/