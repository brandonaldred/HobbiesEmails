const numberOfItems = 6;


function createInput (type, id, placeholder) {
    const input = document.createElement('INPUT');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('name', id);
    input.setAttribute('placeholder', placeholder);
    return input;

}

const builderSection = document.getElementById('newsletter-builder');

for (let i = 1; i <= numberOfItems; i++) {
    const h2 = document.createElement('H2');
    h2.textContent = `Product ${i}`;
    builderSection.appendChild(h2);
    builderSection.appendChild(createInput('text', `image${i}`, 'Image URL'));
    builderSection.appendChild(createInput('text', `description${i}`, 'Product Description'));
    builderSection.appendChild(createInput('text', `link${i}`, 'Product URL'));
}

const buildButton = document.createElement('DIV');
buildButton.setAttribute('class', 'build-button');
buildButton.textContent = 'Build';
builderSection.appendChild(buildButton);

const copyCodeButton = document.createElement('DIV');
copyCodeButton.setAttribute('class','get-code-button');
copyCodeButton.textContent = 'Copy Code to Clipboard';
builderSection.appendChild(copyCodeButton);

buildButton.addEventListener('click', () => {
    buildNewsletter();
});

copyCodeButton.addEventListener('click', () => {
    const code = document.getElementById('newsletter-built').innerHTML;
    navigator.clipboard.writeText(code);
});




function buildNewsletter () {
    let image1 = document.getElementById('image1').value;
    let description1 = document.getElementById('description1').value;
    let link1 = document.getElementById('link1').value;

    let image2 = document.getElementById('image2').value;
    let description2 = document.getElementById('description2').value;
    let link2 = document.getElementById('link2').value;

    let image3 = document.getElementById('image3').value;
    let description3 = document.getElementById('description3').value;
    let link3 = document.getElementById('link3').value;

    let image4 = document.getElementById('image4').value;
    let description4 = document.getElementById('description4').value;
    let link4 = document.getElementById('link4').value;

    let image5 = document.getElementById('image5').value;
    let description5 = document.getElementById('description5').value;
    let link5 = document.getElementById('link5').value;

    let image6 = document.getElementById('image6').value;
    let description6 = document.getElementById('description6').value;
    let link6 = document.getElementById('link6').value;

    console.log(image6);

    let html = `<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
    }

    #MessageViewBody a {
        color: inherit;
        text-decoration: none;
    }

    p {
        line-height: inherit
    }

    @media (max-width:550px) {
        .icons-inner {
            text-align: center;
        }

        .icons-inner td {
            margin: 0 auto;
        }

        .row-content {
            width: 100% !important;
        }

        .column .border {
            display: none;
        }

        .stack .column {
            width: 100%;
            display: block;
        }
    }
</style>
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
    <tbody>
        <tr>
            <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                    class="row-content stack" role="presentation"
                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 530px;"
                                    width="530">
                                    <tbody>
                                        <tr>
                                            <td class="column column-1"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                width="100%">
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="heading_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td style="width:100%;text-align:center;">
                                                            <h1
                                                                style="margin: 0; color: #0073b1 !important; font-size: 51px; font-family: Verdana, Geneva, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
                                                                <span class="tinyMce-placeholder">RECENTLY
                                                                    ADDED</span></h1>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                    class="row-content stack" role="presentation"
                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 530px;"
                                    width="530">
                                    <tbody>
                                        <tr>
                                            <td class="column column-1"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                width="100%">
                                                <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                    role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="padding-top:10px;padding-right:10px;padding-bottom:50px;padding-left:10px;">
                                                            <div style="font-family: Verdana, sans-serif">
                                                                <div
                                                                    style="font-size: 14px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 16.8px; color: #222222; line-height: 1.2;">
                                                                    <p
                                                                        style="margin: 0; font-size: 16px; text-align: center;">
                                                                        <span style="font-size:16px;">Here are six
                                                                            of the hottest products </span><span
                                                                            style="font-size:16px;">to hit the
                                                                            site this week.</span></p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                    class="row-content stack" role="presentation"
                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 530px;"
                                    width="530">
                                    <tbody>
                                        <tr>
                                            <td class="column column-1"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                width="50%">
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="image_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="width:100%;padding-right:10px;padding-left:0px;padding-top:5px;">
                                                            <div align="center" style="line-height:10px"><a
                                                                    href="${link1}" style="outline:none"
                                                                    tabindex="-1" target="_blank"><img
                                                                        alt="${description1}"
                                                                        src="${image1}"
                                                                        style="display: block; height: auto; border: 0; width: 255px; max-width: 100%;"
                                                                        title="${description1}" width="255" /></a></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="10" cellspacing="0"
                                                    class="text_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                    width="100%">
                                                    <tr>
                                                        <td>
                                                            <div style="font-family: Verdana, sans-serif">
                                                                <div
                                                                    style="font-size: 14px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 16.8px; color: #222222; line-height: 1.2;">
                                                                    <p
                                                                        style="margin: 0; font-size: 14px; text-align: center;">
                                                                        <a href="${link1}" rel="noopener"
                                                                            style="text-decoration: none; color: #222222;"
                                                                            target="_blank"><span
                                                                                style="font-size:16px;">${description1}</span></a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="button_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="text-align:center;padding-top:10px;padding-right:10px;padding-bottom:55px;padding-left:10px;">
                                                            <div align="center">
                                                                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${link1}" style="height:48px;width:177px;v-text-anchor:middle;" arcsize="9%" stroke="false" fillcolor="#0073b1"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
                                                                    href="${link1}"
                                                                    style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0073b1;border-radius:4px;width:auto;border-top:1px solid #0073b1;border-right:1px solid #0073b1;border-bottom:1px solid #0073b1;border-left:1px solid #0073b1;padding-top:08px;padding-bottom:8px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                    target="_blank"><span
                                                                        style="padding-left:72px;padding-right:72px;font-size:21px;font-weight:600;display:inline-block;letter-spacing:normal;"><span
                                                                            style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Shop
                                                                            Now</span></span></a>
                                                                <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td class="column column-2"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                width="50%">
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="image_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="width:100%;padding-left:10px;padding-right:0px;padding-top:5px;">
                                                            <div align="center" style="line-height:10px"><a
                                                                    href="${link2}" style="outline:none"
                                                                    tabindex="-1" target="_blank"><img
                                                                        alt="${description2}"
                                                                        src="${image2}"
                                                                        style="display: block; height: auto; border: 0; width: 255px; max-width: 100%;"
                                                                        title="${description2}" width="255" /></a></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="10" cellspacing="0"
                                                    class="text_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                    width="100%">
                                                    <tr>
                                                        <td>
                                                            <div style="font-family: Verdana, sans-serif">
                                                                <div
                                                                    style="font-size: 14px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 16.8px; color: #222222; line-height: 1.2;">
                                                                    <p
                                                                        style="margin: 0; font-size: 14px; text-align: center;">
                                                                        <a href="${link2}" rel="noopener"
                                                                            style="text-decoration: none; color: #222222;"
                                                                            target="_blank"><span
                                                                                style="font-size:16px;">${description2}</span></a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="button_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="text-align:center;padding-top:10px;padding-right:10px;padding-bottom:55px;padding-left:10px;">
                                                            <div align="center">
                                                                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${link2}" style="height:48px;width:177px;v-text-anchor:middle;" arcsize="9%" stroke="false" fillcolor="#0073b1"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
                                                                    href="${link2}"
                                                                    style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0073b1;border-radius:4px;width:auto;border-top:1px solid #0073b1;border-right:1px solid #0073b1;border-bottom:1px solid #0073b1;border-left:1px solid #0073b1;padding-top:08px;padding-bottom:8px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                    target="_blank"><span
                                                                        style="padding-left:72px;padding-right:72px;font-size:21px;font-weight:600;display:inline-block;letter-spacing:normal;"><span
                                                                            style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Shop
                                                                            Now</span></span></a>
                                                                <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                    class="row-content stack" role="presentation"
                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 530px;"
                                    width="530">
                                    <tbody>
                                        <tr>
                                            <td class="column column-1"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                width="50%">
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="image_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="width:100%;padding-right:10px;padding-left:0px;padding-top:5px;">
                                                            <div align="center" style="line-height:10px"><a
                                                                    href="${link3}" style="outline:none"
                                                                    tabindex="-1" target="_blank"><img
                                                                        alt="${description3}"
                                                                        src="${image3}"
                                                                        style="display: block; height: auto; border: 0; width: 255px; max-width: 100%;"
                                                                        title="${description3}" width="255" /></a></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="10" cellspacing="0"
                                                    class="text_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                    width="100%">
                                                    <tr>
                                                        <td>
                                                            <div style="font-family: Verdana, sans-serif">
                                                                <div
                                                                    style="font-size: 14px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 16.8px; color: #222222; line-height: 1.2;">
                                                                    <p
                                                                        style="margin: 0; font-size: 14px; text-align: center;">
                                                                        <a href="${link3}" rel="noopener"
                                                                            style="text-decoration: none; color: #222222;"
                                                                            target="_blank"><span
                                                                                style="font-size:16px;">${description3}</span></a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="button_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="text-align:center;padding-top:10px;padding-right:10px;padding-bottom:55px;padding-left:10px;">
                                                            <div align="center">
                                                                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${link3}" style="height:48px;width:177px;v-text-anchor:middle;" arcsize="9%" stroke="false" fillcolor="#0073b1"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
                                                                    href="${link3}"
                                                                    style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0073b1;border-radius:4px;width:auto;border-top:1px solid #0073b1;border-right:1px solid #0073b1;border-bottom:1px solid #0073b1;border-left:1px solid #0073b1;padding-top:08px;padding-bottom:8px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                    target="_blank"><span
                                                                        style="padding-left:72px;padding-right:72px;font-size:21px;font-weight:600;display:inline-block;letter-spacing:normal;"><span
                                                                            style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Shop
                                                                            Now</span></span></a>
                                                                <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td class="column column-2"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                width="50%">
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="image_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="width:100%;padding-left:10px;padding-right:0px;padding-top:5px;">
                                                            <div align="center" style="line-height:10px"><a
                                                                    href="${link4}" style="outline:none"
                                                                    tabindex="-1" target="_blank"><img
                                                                        alt="${description4}"
                                                                        src="${image4}"
                                                                        style="display: block; height: auto; border: 0; width: 255px; max-width: 100%;"
                                                                        title="${description4}" width="255" /></a></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="10" cellspacing="0"
                                                    class="text_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                    width="100%">
                                                    <tr>
                                                        <td>
                                                            <div style="font-family: Verdana, sans-serif">
                                                                <div
                                                                    style="font-size: 14px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 16.8px; color: #222222; line-height: 1.2;">
                                                                    <p
                                                                        style="margin: 0; font-size: 14px; text-align: center;">
                                                                        <a href="${link4}" rel="noopener"
                                                                            style="text-decoration: none; color: #222222;"
                                                                            target="_blank"><span
                                                                                style="font-size:16px;">${description4}</span></a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="button_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="text-align:center;padding-top:10px;padding-right:10px;padding-bottom:55px;padding-left:10px;">
                                                            <div align="center">
                                                                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${link4}" style="height:48px;width:177px;v-text-anchor:middle;" arcsize="9%" stroke="false" fillcolor="#0073b1"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
                                                                    href="${link4}"
                                                                    style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0073b1;border-radius:4px;width:auto;border-top:1px solid #0073b1;border-right:1px solid #0073b1;border-bottom:1px solid #0073b1;border-left:1px solid #0073b1;padding-top:08px;padding-bottom:8px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                    target="_blank"><span
                                                                        style="padding-left:72px;padding-right:72px;font-size:21px;font-weight:600;display:inline-block;letter-spacing:normal;"><span
                                                                            style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Shop
                                                                            Now</span></span></a>
                                                                <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                    class="row-content stack" role="presentation"
                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 530px;"
                                    width="530">
                                    <tbody>
                                        <tr>
                                            <td class="column column-1"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                width="50%">
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="image_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="width:100%;padding-right:10px;padding-left:0px;padding-top:5px;">
                                                            <div align="center" style="line-height:10px"><a
                                                                    href="${link5}" style="outline:none"
                                                                    tabindex="-1" target="_blank"><img
                                                                        alt="${description5}"
                                                                        src="${image5}"
                                                                        style="display: block; height: auto; border: 0; width: 255px; max-width: 100%;"
                                                                        title="${description5}" width="255" /></a></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="10" cellspacing="0"
                                                    class="text_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                    width="100%">
                                                    <tr>
                                                        <td>
                                                            <div style="font-family: Verdana, sans-serif">
                                                                <div
                                                                    style="font-size: 14px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 16.8px; color: #222222; line-height: 1.2;">
                                                                    <p
                                                                        style="margin: 0; font-size: 14px; text-align: center;">
                                                                        <a href="${link5}" rel="noopener"
                                                                            style="text-decoration: none; color: #222222;"
                                                                            target="_blank"><span
                                                                                style="font-size:16px;">${description5}</span></a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="button_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="text-align:center;padding-top:10px;padding-right:10px;padding-bottom:55px;padding-left:10px;">
                                                            <div align="center">
                                                                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${link5}" style="height:48px;width:177px;v-text-anchor:middle;" arcsize="9%" stroke="false" fillcolor="#0073b1"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
                                                                    href="${link5}"
                                                                    style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0073b1;border-radius:4px;width:auto;border-top:1px solid #0073b1;border-right:1px solid #0073b1;border-bottom:1px solid #0073b1;border-left:1px solid #0073b1;padding-top:08px;padding-bottom:8px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                    target="_blank"><span
                                                                        style="padding-left:72px;padding-right:72px;font-size:21px;font-weight:600;display:inline-block;letter-spacing:normal;"><span
                                                                            style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Shop
                                                                            Now</span></span></a>
                                                                <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td class="column column-2"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                width="50%">
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="image_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="width:100%;padding-left:10px;padding-right:0px;padding-top:5px;">
                                                            <div align="center" style="line-height:10px"><a
                                                                    href="${link6}" style="outline:none"
                                                                    tabindex="-1" target="_blank"><img
                                                                        alt="${description6}"
                                                                        src="${image6}"
                                                                        style="display: block; height: auto; border: 0; width: 255px; max-width: 100%;"
                                                                        title="${description6}" width="255" /></a></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="10" cellspacing="0"
                                                    class="text_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                    width="100%">
                                                    <tr>
                                                        <td>
                                                            <div style="font-family: Verdana, sans-serif">
                                                                <div
                                                                    style="font-size: 14px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 16.8px; color: #222222; line-height: 1.2;">
                                                                    <p
                                                                        style="margin: 0; font-size: 14px; text-align: center;">
                                                                        <a href="${link6}" rel="noopener"
                                                                            style="text-decoration: none; color: #222222;"
                                                                            target="_blank"><span
                                                                                style="font-size:16px;">${description6}</span></a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0"
                                                    class="button_block" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    width="100%">
                                                    <tr>
                                                        <td
                                                            style="text-align:center;padding-top:10px;padding-right:10px;padding-bottom:55px;padding-left:10px;">
                                                            <div align="center">
                                                                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${link6}" style="height:48px;width:177px;v-text-anchor:middle;" arcsize="9%" stroke="false" fillcolor="#0073b1"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
                                                                    href="${link6}"
                                                                    style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0073b1;border-radius:4px;width:auto;border-top:1px solid #0073b1;border-right:1px solid #0073b1;border-bottom:1px solid #0073b1;border-left:1px solid #0073b1;padding-top:08px;padding-bottom:8px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                    target="_blank"><span
                                                                        style="padding-left:72px;padding-right:72px;font-size:21px;font-weight:600;display:inline-block;letter-spacing:normal;"><span
                                                                            style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Shop
                                                                            Now</span></span></a>
                                                                <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`
let output = document.getElementById('newsletter-built');
output.innerHTML = '';
output.innerHTML = html;
}