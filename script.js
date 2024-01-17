document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-accordion');

    faqContainer.addEventListener('click', (e)=> {
       const gruopHeader = e.target.closest('.faq-dropdown-header');
    
           if(!gruopHeader) return;
   
           const group = gruopHeader.parentElement;
           const groupbody = group.querySelector('.faq-dropdown-body');
           const icon = gruopHeader.querySelector('.faq-icon');
        
           icon.classList.toggle('open');
           groupbody.classList.toggle('open');

           const otherGroups = faqContainer.querySelector('.faq-dropdown');

           otherGroups.forEach((otherGroups)=>{
            if(otherGroups!== group){ 
                const otherGroupBody = otherGroup.querySelector('.faq-dropdown-doby');
                const otherIcon = otherGroup.querySelector('.faq-icon');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('open');
            }
           });
    });
});