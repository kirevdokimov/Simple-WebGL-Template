let vert = `
attribute vec4 aVertexPosition;
attribute vec4 aVertexColor;
// attribute vec3 aVertexNormal;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
// uniform mat4 uNormalMatrix;

varying lowp vec4 vColor;
// varying lowp vec3 vLighting;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vColor = aVertexColor;

  // highp vec3 ambientLight = vec3(0.0, 0.0, 0.0);
  // highp vec3 directionalLightColor = vec3(1, 1, 1);
  // highp vec3 directionalVector = normalize(vec3(0,0,1));

  // highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

  // highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
  // vLighting = ambientLight + (directionalLightColor * directional);
}
`