$(function(){
    $('#carousel img:eq(0)').addClass('ativo').show();
    let legenda = $('.ativo').attr('alt');
    $('#carousel').prepend("<p>"+legenda+"</p>");
        setInterval(slider, 4000);

        function slider(){
        if($('.ativo').next().length){ 

        $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');
        
        }else{

        $('.ativo').fadeOut().removeClass('ativo');
        $('#carousel img:eq(0)').fadeIn().addClass('ativo');

        }

    let legenda = $('.ativo').attr('alt');
    $('#carousel p').hide().html(legenda).delay(500)
    .fadeIn();
     }    
});


// $(document).ready(function () {
//     $('.img01, .p01').css('display', 'flex')
//         .hide()
//         .delay('600')
//         .fadeIn('slow')
//     $('.img01, .p01').click(function () {
//         $('.img01, .p01').css('display', 'none')
//         $('.img02, .p02').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.img02, .p02').click(function () {
//         $('.img02, .p02').css('display', 'none')
//         $('.img03, .p03').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.img03, .p03').click(function () {
//         $('.img03, .p03').css('display', 'none')
//         $('.img04, .p04').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.img04, .p04').click(function () {
//         $('.img04, .p04').css('display', 'none')
//         $('.img05, .p05').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
//     $('.img05, .p05').click(function () {
//         $('.img05, .p05').css('display', 'none')
//         $('.img01, .p01').css('display', 'flex')
//             .hide()
//             .delay('600')
//             .fadeIn('slow')
//     });
    
//   });

// determinar as imagens
// determinar como vai querer o carousel
// fazer o carousel seguir a direççao



