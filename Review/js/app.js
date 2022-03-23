
const buildButton = document.querySelector('.build-button');
buildButton.addEventListener('click',() => {
    let model = document.getElementById('model').value;
    let object = getItem(model);
});



async function getItem(model) {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cflb=0H28vgQRvpXTQ5165MqoGvinbugRAirbLddEADJPGYc");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    let response = await fetch(
        `https://www.amainhobbies.com/be/admin/Marketing/ProductData?apiKey=cceffceeb8d6ebd360673090535103d4&model=${model}`,
        requestOptions);
    let item = await response.text();
    item = JSON.parse(item);
    let output = buildHTML(item);
}

function buildHTML (object) {
    let html = `<div style="max-width: 600px; margin: auto;">
            <style type="text/css" id="media-query-bodytag">
                @media (max-width: 520px) {
                    .block-grid {
                        min-width: 320px !important;
                        max-width: 100% !important;
                        width: 100% !important;
                        display: block !important;
                    }

                    .col {
                        min-width: 320px !important;
                        max-width: 100% !important;
                        width: 100% !important;
                        display: block !important;
                    }

                    .col>div {
                        margin: 0 auto;
                    }

                    img.fullwidth {
                        max-width: 100% !important;
                    }

                    img.fullwidthOnMobile {
                        max-width: 100% !important;
                    }

                    .no-stack .col {
                        min-width: 0 !important;
                        display: table-cell !important;
                    }

                    .no-stack.two-up .col {
                        width: 50% !important;
                    }

                    .no-stack.mixed-two-up .col.num4 {
                        width: 33% !important;
                    }

                    .no-stack.mixed-two-up .col.num8 {
                        width: 66% !important;
                    }

                    .no-stack.three-up .col.num4 {
                        width: 33% !important;
                    }

                    .no-stack.four-up .col.num3 {
                        width: 25% !important;
                    }

                    .mobile_hide {
                        min-height: 0px !important;
                        max-height: 0px !important;
                        max-width: 0px !important;
                        display: none !important;
                        overflow: hidden !important;
                        font-size: 0px !important;
                    }
                }
            </style>
            <!--[if IE]><div class="ie-browser"><![endif]-->
            <!--[if mso]><div class="mso-container"><![endif]-->
            <table class="nl-container"
                style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #FFFFFF;width: 100%"
                cellpadding="0" cellspacing="0">
                <tbody>
                    <tr style="vertical-align: top">
                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;"><![endif]-->

                            <div style="background-color:transparent;">
                                <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                                    class="block-grid ">
                                    <div
                                        style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                                        <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                                        <div class="col num12"
                                            style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;">
                                            <div style="background-color: transparent; width: 100% !important;">
                                                <!--[if (!mso)&(!IE)]><!-->
                                                <div
                                                    style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                    <!--<![endif]-->


                                                    <div class="">
                                                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
                                                        <div
                                                            style="color:#5a7e92;line-height:120%;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
                                                            <div
                                                                style="font-size:12px;line-height:14px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;color:#5a7e92;text-align:left;">
                                                                <p
                                                                    style="margin: 0;font-size: 14px;line-height: 17px;text-align: center">
                                                                    <strong><span
                                                                            style="font-size: 72px; line-height: 86px;">THANK
                                                                            YOU</span></strong></p>
                                                            </div>
                                                        </div>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </div>


                                                    <div align="center" class="img-container center  autowidth  "
                                                        style="padding-right: 0px;  padding-left: 0px;">
                                                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px;line-height:0px;"><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->
                                                        <a href="${object.Url}/review" target="_blank">
                                                            <img class="center  autowidth " align="center" border="0"
                                                                src="https://resumate.com/wp-content/uploads/2016/05/five-stars-300x70.png"
                                                                alt="Image" title="Image"
                                                                style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;width: 100%;max-width: 300px"
                                                                width="300">
                                                        </a>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </div>



                                                    <div align="center" class="img-container center  autowidth  "
                                                        style="padding-right: 0px;  padding-left: 0px;">
                                                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px;line-height:0px;"><td style="padding-right: 0px; padding-left: 0px;" align="center"><![endif]-->
                                                        <a href="${object.Url}/review" target="_blank">
                                                            <img width="475" class="center  autowidth " align="center" border="0"
                                                                src="https://images.amain.com/images/${object.Image}" alt="Review ${object.Model}>"
                                                                title="${object.Model}>"
                                                                style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;width: 100%;max-width: 475px"
                                                                width="475">
                                                        </a>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </div>



                                                    <div class="">
                                                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 15px; padding-bottom: 15px;"><![endif]-->
                                                        <div
                                                            style="line-height:120%;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;color:#5a7e92; padding-right: 10px; padding-left: 10px; padding-top: 15px; padding-bottom: 15px;">
                                                            <div
                                                                style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;line-height:14px;color:#5a7e92;text-align:left;">
                                                                <p
                                                                    style="margin: 0;font-size: 12px;line-height: 14px;text-align: center">
                                                                    <span
                                                                        style="font-size: 26px; line-height: 31px;"><strong>We
                                                                            Want To Hear About Your New
                                                                            Kit!</strong></span></p>
                                                            </div>
                                                        </div>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </div>


                                                    <div class="">
                                                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 30px;"><![endif]-->
                                                        <div
                                                            style="line-height:150%;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;color:#8996a0; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 30px;">
                                                            <div
                                                                style="font-size:12px;line-height:18px;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;color:#8996a0;text-align:left;">
                                                                <p
                                                                    style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">
                                                                    <span
                                                                        style="font-size: 16px; line-height: 24px;">Your
                                                                        opinion matters and we'd love to hear your
                                                                        thoughts on your <${object.Name}> purchase.
                                                                        Honest reviews help us better help you, and help
                                                                        your fellow r/c'ers make better informed
                                                                        decisions.</span></p>
                                                            </div>
                                                        </div>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </div>



                                                    <div align="center" class="button-container center "
                                                        style="padding-right: 10px; padding-left: 10px; padding-top:10px; padding-bottom:10px;">
                                                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:10px; padding-bottom:10px;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${object.Url}/review" style="height:46pt; v-text-anchor:middle; width:181pt;" arcsize="9%" strokecolor="#5a7e92" fillcolor="#5a7e92"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size:16px;"><![endif]-->
                                                        <a href="${object.Url}/review" target="_blank"
                                                            style="display: block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #ffffff; background-color: #5a7e92; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; max-width: 242px; width: 122px;width: auto; border-top: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-left: 0px solid transparent; padding-top: 15px; padding-right: 60px; padding-bottom: 15px; padding-left: 60px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;mso-border-alt: none">
                                                            <span style="font-size:16px;line-height:32px;">Leave A
                                                                Review</span>
                                                        </a>
                                                        <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                                                    </div>


                                                    <!--[if (!mso)&(!IE)]><!-->
                                                </div>
                                                <!--<![endif]-->
                                            </div>
                                        </div>
                                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                    </div>
                                </div>
                            </div>
                            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`;
        document.getElementById('newsletter-built').innerHTML = html;
}