import { noteService } from '../service/note.service.js';
import keepList from '../cmps/keep-list.cmp.js';
import keepFilter from '../cmps/keep-filter.cmp.js';

export default {
    name: 'keep-app',
    template: `
        <section class="flex column">
            <div class="keep-head-container flex space-between align-center">
                <h1>Keep remember</h1>
                <img class="img-header" src="img/logo.png">
            </div>
            <div class="add-search-container flex space-around">
                <router-link class="add-link" to="/note/edit"><i class="fas fa-plus-square"></i></router-link> 
                <keep-filter @getFilter="getFilter"></keep-filter>
            </div>
            <keep-list :notes="notesToShow"></keep-list>
           
        </section>
    `,

    data() {
        return {
            notes: null,
            filter: null
        }
    },

    created() {
        noteService.query()
            .then(res => {
                console.log('res', res);
                
                this.notes = res
            })
    },

    computed: {
        notesToShow() {
            if (!this.filter) return this.notes

            return this.notes.filter(note =>note.title.includes(this.filter))

        }
    },
    methods: {
        getFilter(filter) {
            this.filter = filter
            console.log('got emit', filter);
        },
        addNewNote(){

        }
    },

    components: {
        keepList,
        keepFilter,
        
    },

}
