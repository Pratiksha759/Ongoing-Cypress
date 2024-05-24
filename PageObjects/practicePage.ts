
export class practicePage {
    demoUrl= "https://demo.automationtesting.in/Index.html";
    iframeUrl="https://qavbox.github.io/demo/iframes/";
    google="https://www.google.com";
    uploadFileUrl="https://the-internet.herokuapp.com/upload";
    fileUrl="https://davidwalsh.name/demo/multiple-file-upload.php";
    shadowDomUrl="https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm";
    gsearchbar=".gLFyf";
    
    sec1= "#ui-id-1";
    email='#email';
    go="#enterimg";
    frame1="#Frame1";
    frame2="#Frame2";
    frameInput="#frameinput";
    frameInputText="#frameinputtext";
    frametext="#frametext";
    youtube='https://www.youtube.com/';
    searchbar='#search-input > #search';
    search='#search-icon-legacy > yt-icon.style-scope > .style-scope > .yt-spec-icon-shape > div';
    video=':nth-child(5) > #content > .yt-simple-endpoint.ytd-playlist-renderer > h3.style-scope > #video-title'
    uploadFile="#file-upload";
    submitFile="#file-submit";
    drag="#drag-drop-upload";
    dragArea="#drag-drop-upload > div > div.dz-details > div > span";
    fileArea="div[class='example'] h3";
    multiUploads='#filesToUpload';
    multiFileArea='#main > div > p:nth-child(6) > strong';
    shadowFileInput='.smart-browse-input';
    shadowFileAra=".smart-item-name"
    

    visitSite(url: string): void {
        cy.visit(url);
    }

    clickElement(selector: string): void {
        cy.get(selector).click();
    }

Typing(val3:any,val4:any){
    cy.get(val3).type(val4)
}
}