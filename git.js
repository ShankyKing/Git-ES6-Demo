// a single Commit

class Commit{
    constructor(id, parent= null, message){
        this.id= id;
        this.parent= parent
        this.message= message;
    }
}

// A branch points to a commit

class Branch{
    constructor(name, commit= null){
        this.name= name;
        this.commit= commit;
    }
}

// the repo

class Git{
    constructor(name){
        this.name= name;    // repo name
        this.lastCommitId= -1;  // will increment each time we create a commit
        this.branches= [];  // list of Branch objects

        // create the default branch 'master'

        const master = new Branch('master', null)   
        this.branches.push(master);

        // HEAD points to the current branch
        this.Head= master;
    }

    // create a new commit on the current branch
    commit(message){
        // new commit's parent is the current HEAD commit
        const commit= new Commit(++this.lastCommitId, this.Head.commit, message);
        // move the current branch (HEAD) to point to the new commit
        this.Head.commit= commit;

        return commit;
    }
    // return the commits visible from the current HEAD in reverse chronological order
    log(){
        const history= [];
        let commit= this.Head.commit; // start from the tip of the current branch
        while(commit){
            history.push(commit);
            commit= commit.parent; // follow the parent pointer backwards
        }
        return history;
    }
    // switch to an existing branch or create a new one if it doesn't exist
    checkout(branchName){
        //try to find the branch

        const existing= this.branches.find(b=> b.name=== branchName);
        if(existing){
            console.log(`Switched to existing branch: ${branchName}`);
            this.Head= existing;
            return this;
        }

        // create new branch that points to the current commit
        const newBranch= new Branch(branchName, this.Head.commit);
        this.branches.push(newBranch);
        this.Head= newBranch;   
        console.log(`Switched to new branch: ${branchName}`);
        return this;
    }
}

if (typeof window !== 'undefined') window.Git = Git;
if (typeof global !== 'undefined') global.Git = Git;
if (typeof module !== 'undefined' && module.exports) module.exports = Git;
