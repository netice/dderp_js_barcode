    $(document).ready(function(){
        console.log('loading js barcode');
        $(document).find('.dd_barcode').each(function(){
            var bc_ct = $(this);
            var bc_value = bc_ct.attr('dd_value');
            var bc_type = bc_ct.attr('dd_type');
            var bc_params = {
                barWidth: parseInt(bc_ct.attr('dd_barWidth')) || null,
                barHeight: parseInt(bc_ct.attr('dd_barHeight')) || null,
                moduleSize: parseInt(bc_ct.attr('dd_moduleSize')) || null,
                //showHRI: (bc_ct.attr('dd_showHRI') !== 'false') || null,
                showHRI: (bc_ct.attr('dd_showHRI') === undefined || bc_ct.attr('dd_showHRI') === 'false') ? false : true,
                bgColor: bc_ct.attr('dd_bgCol||') || null,
                color: bc_ct.attr('dd_col||') || null,
                fontSize: parseInt(bc_ct.attr('dd_fontSize')) || null,
                output: bc_ct.attr('dd_output') || null,
                posX: parseInt(bc_ct.attr('dd_posX')) || null,
                posY: parseInt(bc_ct.attr('dd_posY')) || null,
            };
            bc_ct.empty();
            console.log(bc_params);
            bc_ct.barcode(bc_value, bc_type, bc_params);

        });
        console.log('js barcode loaded');
    });


