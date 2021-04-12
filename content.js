window.onload = () => {

    let observer = new MutationObserver(mutations => {
        for(let mutation of mutations) {
                for(let addedNode of mutation.addedNodes) {
                    let chat_box = document.querySelector("[data-pagelet='ChatTab']");

                    if (addedNode.nodeName === "DIV" && chat_box !== null) {
                        let firstLayer = chat_box.firstChild;
                        let secondLayer = firstLayer.firstChild;

                        let x = 0;
                        let y = 0;
                        let w = 0;
                        let h = 0;

                        function mouse_down_handler (e) {
                            x = e.clientX;
                            y = e.clientY;

                            const styles = window.getComputedStyle(chat_box);
                            w = parseInt(styles.width, 10);
                            h = parseInt(styles.height, 10);

                            document.addEventListener('mousemove', mouse_move_handler);
                            document.addEventListener('mouseup', mouse_up_handler);
                        }

                        function mouse_move_handler (e) {
                            const dx = e.clientX - x;
                            const dy = e.clientY - y;

                            chat_box.style.width = `${w + dx}px`;
                            chat_box.style.height = `${h + dy}px`;
                            chat_box.style.minWidth = '328px';
                            chat_box.style.maxWidth = '50vw';
                            chat_box.style.minHeight = '455px';
                            chat_box.style.maxHeight = '90vh';

                            secondLayer.style.cursor = 'ew-resize';
                            secondLayer.style.minWidth = '328px';
                            secondLayer.style.maxWidth = '50vw';
                            secondLayer.style.minHeight = '455px';
                            secondLayer.style.maxHeight = '90vh';
                            secondLayer.style.height = '100%';
                            secondLayer.style.width = '100%';

                            firstLayer.style.minWidth = '328px';
                            firstLayer.style.maxWidth = '50vw';
                            firstLayer.style.minHeight = '455px';
                            firstLayer.style.maxHeight = '90vh';
                            firstLayer.style.height = '100%';
                            firstLayer.style.width = '100%';

                        };

                        function mouse_up_handler () {
                            document.removeEventListener('mousemove', mouse_move_handler);
                            document.removeEventListener('mouseup', mouse_up_handler);
                        };

                        chat_box.addEventListener('mousedown', mouse_down_handler);

                    }
                }
            }
        });
    observer.observe(document, { childList: true, subtree: true });
}