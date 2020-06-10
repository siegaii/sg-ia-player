class IAPlayer {
    constructor() {
        this.LoadIAPlayers();
    }

    /**
     * 为所有互动视频容器加载播放器
     */
    private LoadIAPlayers() {
        const containers = document.getElementsByTagName('interactive-player');
        for (let i = 0; i < containers.length; i++) {
            const player = this.getIAPlayer();
            containers[i].appendChild(player);
        }
    }

    /**
     * 获取一个互动视频播放器
     */
    private getIAPlayer(): HTMLVideoElement {
        const player = document.createElement('video');
        return player;
    }
}

const Player = new IAPlayer();
export default { Player };
