export default{
        negative($q,title,message){
          return  $q.dialog({
            title: '<span class="material-icons" style="color:#5f0909; font-size:36px;margin:5px">error</span>' + title,
            message: message,
            html:true,
            persistent:true,
                ok: {
                push: true,
                color: 'negative'
                },
            })
        },
        info($q,title,message){
            return $q.dialog({
            title: '<span class="material-icons" style="color:#31CCEC; font-size:36px;margin:5px">info</span>' + title,
            message: message,
            html:true,
            persistent:true,
                ok: {
                push: true,
                color: 'info'
                },
            })
        },
        positive($q,title,message){
            return $q.dialog({
            title: '<span class="material-icons" style="color:#21BA45; font-size:36px;margin:5px">check_circle</span>' + title,
            message: message,
            html:true,
            persistent:true,
                ok: {
                push: true,
                color: 'positive'
                },
            })
        },
        warning($q,title,message){
            return $q.dialog({
            title: '<span class="material-icons" style="color:#21BA45; font-size:36px;margin:5px">check_circle</span>' + title,
            message: message,
            html:true,
            persistent:true,
                ok: {
                push: true,
                color: 'warning'
                },
            })
        },
}