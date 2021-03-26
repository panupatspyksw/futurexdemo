varying float vNoise;
varying vec2 vUv;
uniform float time;
uniform sampler2D oceanTexture;
void main() {
    vec3 color1 = vec3(0.7,0.,0.08);
    vec3 color2 = vec3(0.87,0.,0.41);
    vec3 finalColor = mix(color1,color2,0.5+vNoise);
    
    vec2 newUV = vUv;
    newUV = vec2(newUV.x, newUV.y + 0.01 * sin(newUV.x*10.+time));
    vec4 oceanView = texture2D(oceanTexture,newUV);




   // gl_FragColor = vec4(oceanView,1.);
   // gl_FragColor = vec4(vUv,0.5,0.);
   // gl_FragColor = oceanView;
   gl_FragColor = vec4(vNoise-0.1);

}